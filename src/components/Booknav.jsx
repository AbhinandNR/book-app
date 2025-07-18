import React from 'react'

const Booknav = () => {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid bg-muted">
    <a class="navbar-brand" href="#">Books</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bookview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AddBook</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DeleteBook</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav></div>
  )
}

export default Booknav