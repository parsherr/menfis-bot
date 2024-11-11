import React from "react";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import Markdoc from "@markdoc/markdoc";
import yaml from "js-yaml";
import { z } from "zod";
import { alert } from "./alert-tag";
import { fence } from "./fence-node";
import Alert from "../../components/Alert";
import Fence from "../../components/Fence";
import categories from "../../../docs/categories.json";

export async function getFiles() {
  const folderNames = await readdir(join(process.cwd(), "docs"));

  let allPosts: Array<{ file: string; category: string }> = [];

  for (const folderName of folderNames) {
    if (folderName === "categories.json") continue;
    const fileNames = await readdir(join(process.cwd(), "docs", folderName));

    for (const fileName of fileNames) {
      if (fileName.endsWith(".mdoc") || fileName.endsWith(".md")) {
        const file = await readFile(join(process.cwd(), "docs", folderName, fileName), "utf-8");
        allPosts.push({ file, category: folderName });
      }
    }
  }

  return allPosts;
}

export async function getPosts() {
  const files = await getFiles();

  return files
    .map(({ file, category }) => {
      const ast = Markdoc.parse(file);
      const rawFrontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};

      const schema = z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        // category: z.object({ slug: z.string(), name: z.string() }),
        order: z.number(),
      });

      const frontmatter = schema.parse(rawFrontmatter);
      const content = Markdoc.transform(ast, {
        variables: { frontmatter },
        tags: { alert },
        nodes: { fence },
      });
      const html = Markdoc.renderers.react(content, React, { components: { Alert, Fence } });

      const categoryInfo = z
        .object({ slug: z.string(), name: z.string(), position: z.number() })
        .parse(categories.find((c) => c.slug === category));

      return { meta: frontmatter, category: categoryInfo, html };
    })
    .sort((a, b) => a.meta.order - b.meta.order);
}
