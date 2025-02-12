export const movies = [
  {
    id: 1,
    title: 'Avatar',
    budget: '$1m',
    poster: 'https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8fDA%3D',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi id cumque provident ipsa, ullam ab sint vero aliquam harum saepe veniam sed consequatur exercitationem perspiciatis nam nostrum. Ipsam, repudiandae data1'
  },
  {
    id: 2,
    title: 'GodFather',
    budget: '$2m',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29kZmF0aGVyJTIwbW92aWV8ZW58MHx8MHx8fDA%3D',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi id cumque provident ipsa, ullam ab sint vero aliquam harum saepe veniam sed consequatur exercitationem perspiciatis nam nostrum. Ipsam, repudiandae data2'
  },
  {
    id: 3,
    title: 'ShawShank Redepmtion',
    budget: '$3m',
    poster: 'https://images.unsplash.com/photo-1617219883316-881339deee58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYXdzaGFuayUyMG1vdmllfGVufDB8fDB8fHww',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi id cumque provident ipsa, ullam ab sint vero aliquam harum saepe veniam sed consequatur exercitationem perspiciatis nam nostrum. Ipsam, repudiandae data3'
  },
];

export const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
];
export const getDataById = (id) => {
  return posts.find((post) => post.id === Number(id));
}

export const movieData = {
  "Title": "Avatar",
  "Year": "2009",
  "Rated": "PG-13",
  "Released": "18 Dec 2009",
  "Runtime": "162 min",
  "Genre": "Action, Adventure, Fantasy",
  "Director": "James Cameron",
  "Writer": "James Cameron",
  "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
  "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  "Language": "English, Spanish",
  "Country": "USA, UK",
  "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
  "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
  "Metascore": "83",
  "imdbRating": "7.9",
  "imdbVotes": "890,617",
  "imdbID": "tt0499549",
  "Type": "movie",
  "Response": "True",
  "Images": [
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
  ]
};