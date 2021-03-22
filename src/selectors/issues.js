// Get visible issues
export default (issues, { text }) => {
  return issues.filter(({ node }) => {
    const textMatch = node.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};
