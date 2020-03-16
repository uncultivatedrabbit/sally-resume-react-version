import React from 'react';
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <header>
        <img
          id="headshot"
          src="https://pbs.twimg.com/profile_images/3540786740/5279b398f17aa2cd4a301e937897d8fd.jpeg"
          alt="sally headshot"
        />
        <h1>Hello, I'm {props.name}</h1>
        <h3>Web Developer + Web Designer</h3>
        <p>Find out more below</p>
        <i className="fas fa-arrow-circle-down fa-3x"></i>
      </header>
      <main>
        <h2>Job History:</h2>
        <hr />
        <h3>Freelance Web Developer</h3>
        <h4>Volta Dev + Design</h4>
        <p>January 2010 - Present</p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui optio libero reiciendis. Quod, qui. Velit at totam
          provident ducimus beatae impedit accusamus, rerum sapiente,
          dolorum nisi in doloribus placeat cupiditate. A minima dolorem
          dicta dolores natus sit, ut ab iste vel vitae quaerat nam modi
          voluptatum, nihil, officia autem distinctio. Architecto aliquid
          obcaecati fugiat molestias, autem provident maxime a quo.
          Placeat dignissimos, similique quibusdam reiciendis molestiae
          unde distinctio laborum eligendi accusantium veniam architecto
          quae dolorum voluptas cum est fugiat quis maiores asperiores
          ipsum magnam, dicta nobis? Recusandae doloribus necessitatibus
          placeat. Cupiditate libero officia labore nam voluptates,
          facilis ut. Similique, quidem accusantium minima, iste nesciunt
          culpa inventore, mollitia consequuntur facere ipsa laborum sit
          expedita itaque! Corporis quis magni doloremque temporibus cum.
          Dolorem totam laborum facilis ratione at excepturi nam,
          architecto quos voluptatum, error ipsa! Eaque autem inventore
          iure, quia quibusdam nostrum adipisci numquam cum quae.
          Assumenda quasi molestiae cupiditate quaerat consequatur.
        </p>
        <h3>Cashier</h3>
        <h4>Walgreens</h4>
        <p>October 2001 - October 2010</p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui optio libero reiciendis. Quod, qui. Velit at totam
          provident ducimus beatae impedit accusamus, rerum sapiente,
          dolorum nisi in doloribus placeat cupiditate. A minima dolorem
          dicta dolores natus sit, ut ab iste vel vitae quaerat nam modi
          voluptatum, nihil, officia autem distinctio. Architecto aliquid
          obcaecati fugiat molestias, autem provident maxime a quo.
          Placeat dignissimos, similique quibusdam reiciendis molestiae
          unde distinctio laborum eligendi accusantium veniam architecto
          quae dolorum voluptas cum est fugiat quis maiores asperiores
          ipsum magnam, dicta nobis? Recusandae doloribus necessitatibus
          placeat. Cupiditate libero officia labore nam voluptates,
          facilis ut. Similique, quidem accusantium minima, iste nesciunt
          culpa inventore, mollitia consequuntur facere ipsa laborum sit
          expedita itaque! Corporis quis magni doloremque temporibus cum.
          Dolorem totam laborum facilis ratione at excepturi nam,
          architecto quos voluptatum, error ipsa! Eaque autem inventore
          iure, quia quibusdam nostrum adipisci numquam cum quae.
          Assumenda quasi molestiae cupiditate quaerat consequatur.
        </p>
      </main>
      <section>
        <h2>Education:</h2>
        <hr />
        <h4>BS in Computer Science</h4>
        <p>University of California, Berkeley</p>
      </section>
      <address>
      <hr />
        Sally Student
        <br />
        Email: sally_student@berkeley.edu
        <br />
        Phone Number: (949)-554-8172
        <br />
      </address>
    </React.Fragment>
  );
}

export default App;
