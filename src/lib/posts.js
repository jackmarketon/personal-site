import matter from 'gray-matter';

// eslint-disable-next-line import/no-mutable-exports
let posts = null;

function initPosts() {
  if (posts !== null) {
    return posts;
  }

  return (ctx => {
    const keys = ctx.keys();
    const values = keys.map(ctx);

    return keys.reduce((acc, key, idx) => {
      // Slug from file name
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');

      if (slug.indexOf('example-') === 0) {
        return acc;
      }

      const { default: value } = values[idx];
      const { content: document, data } = matter(value);

      // W/ No dates we have a post that notes live
      if (!data.date) {
        return acc;
      }

      return { ...acc, [slug]: { ...data, document } };
    }, {});
  })(require.context('../posts', true, /\.md$/));
}

posts = initPosts();

export default posts;
