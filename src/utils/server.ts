import globby from 'globby';
import matter from 'gray-matter';
import fs from 'fs-extra';

export async function getPosts() {
    let paths = await getPostMDFilePaths();
    let posts = await Promise.all(
        paths.map(async (item) => {
            console.log(item);
            const content = await fs.readFile(item, 'utf-8');
            const { data } = matter(content);
            data.date = _convertDate(data.date);
            return {
                frontMatter: data,
                regularPath: `${item.replace('.md', '.html')}`
            };
        })
    );
    posts.sort(_compareDate);
    // console.log(posts.filter((item) => item.frontMatter.layout !== 'page'));
    return posts.filter((item) => item.frontMatter.layout !== 'page');
    // return posts;
}

function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON();
    return json_date.split('T')[0];
}

function _compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

async function getPostMDFilePaths() {
    let paths = await globby(['**.md'], {
        ignore: ['node_modules', 'README.md']
    });
    // return paths.filter((item) => item.includes('posts/'));
    return paths;
}

export async function getPostLength() {
    // getPostMDFilePath return type is object not array
    return [...(await getPostMDFilePaths())].length;
}
