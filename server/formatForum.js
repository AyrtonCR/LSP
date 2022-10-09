const formatForum = (forum) => {
  const formattedForum = {
    forum_acc_message: forum.forum_acc_message,
    forum_acc_name: forum.forum_acc_name,
    forum_image: forum.forum_image,
  };
  return formattedForum;
};

module.exports = formatForum;
