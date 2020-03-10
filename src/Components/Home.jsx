import React from 'react'
import { Jumbotron, Media, Container, Nav, Image } from 'react-bootstrap'
import projects from '../assets/projects.js'

const Home = (props) => {
  return (
    <>
    <style type='text/css'>
    {`
      .jumbotron {
        background-color: ${props.theme[3]}
      }
    `}
    </style>
    <Container>
      <br/>
      <div className='right'>
        <h3 className='title'>Projects</h3>
      </div>
      <br/>
      {projects.map((project) => {
        return (
          <Jumbotron>
            <Media>
              <Image
                style={{width:'50%', height:'auto'}}
                src={project.image}
                alt={project.name}
              />
              <Media.Body>
                <h5>{project.name}</h5>
                <p>{project.body}</p>
                  <Nav.Link href={project.github} target='_blank'>Github</Nav.Link>
                  <Nav.Link href={project.heroku} target='_blank'>Heroku</Nav.Link>
              </Media.Body>
            </Media>
          </Jumbotron>
        )
      })}
      <Jumbotron>
        <Media>
          <Image
            style={{width:'50%', height:'auto'}}
            src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
            alt='placeholder'
          />
          <Media.Body>
            <h5>Project Name</h5>
            <p>this project is about this and that</p>
            <Nav.Link>Github</Nav.Link>
            <Nav.Link>Heroku</Nav.Link>
          </Media.Body>
        </Media>
      </Jumbotron>
    </Container>
    </>
  )
}

export default Home
