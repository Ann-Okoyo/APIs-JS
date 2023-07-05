const posts=document.getElementById("posts")

const getPost=()=>{
    return fetch('https://dummyjson.com/posts')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)


}
getPost()

const displayPosts =async()=>{
    const post=await getPost()
    console.log(post)

    post.posts.map((item)=>{
        let div =document.createElement('div');
        let title=document.createElement('h1');
        let reactions=document.createElement('h2');
        let body =document.createElement('p');

        title.innerHTML =item.title;
        reactions.innerHTML=item.reactions;
        body.innerHTML=item.body;



         div.appendChild(title);
         div.appendChild(reactions);
         div.appendChild(body);



         div.setAttribute('key',item.id);

         posts.appendChild(div);
         
    });
   
}
displayPosts()

const addpost =()=>{
   fetch ('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'I am in love with someone.',
    userId: 5,
    body:"Hello Ann Muyale, You will be a Mobile Developer.",
    reactions:7
  })
})
.then(res => res.json())
.then(console.log);
            

}