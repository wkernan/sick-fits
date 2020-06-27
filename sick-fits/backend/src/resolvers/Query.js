const { forwardTo } = require('prisma-binding');

const Query = {
  // when query is identical to prisma.graphql
  items: forwardTo('db'),
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
