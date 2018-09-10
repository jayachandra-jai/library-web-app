var books_data=[

      {
        book_id:'bid1',
        title: 'Java The Complete',
        pic_url: 'img/books/book1.jpg',
        author_id: 'aid1'
      },
      {
        book_id:'bid2',
        title: 'Node Js Tutorials',
        pic_url: 'img/books/book2.jpg',
        author_id: 'aid3'
      },
      {
        book_id:'bid3',
        title: 'Express  Js Tutorials',
        pic_url: 'img/books/book3.jpg',
        author_id: 'aid2'
      },
      {
        book_id:'bid4',  
        title: 'React  Js Tutorials',
        pic_url: 'img/books/book1.png',
        author_id: 'aid1'
      },
      {
        book_id:'bid5',
        title: 'Tutorials',
        pic_url: 'img/books/book1.jpg',
        author_id: 'aid3'
      }
    
    ];

var authors_data=[
        { author_id:'aid1',
          author_name: 'James Gosling',
          pic_url: 'img/authors/author1.jpg',
          category: 'Computer Science'
        },
        {   author_id:'aid2',
            author_name: 'A.P.J Abdul Kalam',
            pic_url: 'img/authors/author3.jpg',
            category: 'Science'
        },
        {   author_id:'aid3',
            author_name: 'Balaguru Swami',
            pic_url: 'img/authors/author2.jpg',
            category: 'Computer Science'
        }
    ];


module.exports={
    "authors_data":authors_data,
    'books_data':books_data

}