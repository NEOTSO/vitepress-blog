import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createMarkdownRenderer, MarkdownRenderer } from "vitepress";
import { fileURLToPath } from "url";

let md: MarkdownRenderer;
const dirname = path.dirname(fileURLToPath(import.meta.url));
const postDir = path.resolve(dirname, "../../posts");

export interface Post {
    title: string;
    draft?: boolean;
    href: string;
    date: {
        time: number;
        string: string;
    };
    tags?: string[];
    excerpt: string | undefined;
    data?: Record<string, any>;
}

interface PostWithData extends Post {
    data: Record<string, any>;
}

declare const data: Post[];
export { data };

async function load(): Promise<Post[]>;
async function load(asFeed: boolean): Promise<PostWithData[]>;
async function load(asFeed = false) {
    md = md || (await createMarkdownRenderer(process.cwd()));
    return fs
        .readdirSync(postDir)
        .filter((file) => {
            const ext = path.extname(file);
            if (ext !== ".md") return false;
            const fullePath = path.join(postDir, file);
            const stat = fs.lstatSync(fullePath);
            return stat.isFile();
        })
        .map((file) => getPost(file, postDir, asFeed))
        .filter((item) => !item?.draft)
        .sort((a, b) => b.date.time - a.date.time);
}

export default {
    watch: path.join(postDir, "*.md"),
    load,
};

const cache = new Map();

function getPost(file: string, postDir: string, asFeed = false): Post {
    const fullePath = path.join(postDir, file);
    const timestamp = fs.statSync(fullePath).mtimeMs;

    const cached = cache.get(fullePath);
    if (cached && timestamp === cached.timestamp) {
        return cached.post;
    }

    const src = fs.readFileSync(fullePath, "utf-8");
    const { data, excerpt } = matter(src, {
        excerpt_separator: "<!-- more -->",
    });
    const post: Post = {
        title: data.title,
        draft: data.draft || false,
        href: `/posts/${file.replace(/\.md$/, ".html")}`,
        date: formatDate(data.date),
        tags: data.tags?.split(", ") || [],
        excerpt,
    };
    if (asFeed) {
        // only attach these when building the RSS feed to avoid bloating the
        // client bundle size
        post.data = data;
    }

    cache.set(fullePath, {
        timestamp,
        post,
    });

    return post;
}

function formatDate(date: string | Date): Post["date"] {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    date.setUTCHours(12);
    return {
        time: +date,
        string: date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
    };
}
