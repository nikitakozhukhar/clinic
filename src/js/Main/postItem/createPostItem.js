export function createPostItem() {
  const contentPost = document.createElement('article');
  const img = document.createElement('img');
  const postContainer = document.createElement('div');
  const postTitle = document.createElement('h2');
  const postDescription = document.createElement('p');

  img.src = 'https://i.postimg.cc/htrBBQqM/Rectangle-9.png';
  img.alt = 'изображение приемной в клинике';
  
  
  contentPost.classList.add('content_post');
  img.classList.add('post_image');
  postContainer.classList.add('post_container');
  postTitle. classList.add('post_title')
  postDescription.classList.add('post_description');

  postTitle.textContent = 'Многопрофильная клиника для детей и взрослых';
  postDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magnam distinctio! Fugiat provident pariatur officiis est non quia numquam possimus architecto consectetur corrupti rerum, incidunt nulla culpa sint ducimus necessitatibus!'

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postDescription);

  contentPost.appendChild(img);
  contentPost.appendChild(postContainer);

  return contentPost
}