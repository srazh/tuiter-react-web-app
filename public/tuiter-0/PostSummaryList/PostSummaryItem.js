const PostSummaryContent = (post) => {
  return(`

    <tr>
          <td>
            <p class="wd-p-topic">${post.topic}</p><br>
            <h2>${post.userName}</h2><p style="padding-left: 10px"> ${post.time}</p><br>
            <h2>${post.title}</h2>
          </td>
          <td>
            <img class="wd-post-image" src="${post.image}">
          </td>
        </tr>
       
   `);
}
export default PostSummaryContent;
