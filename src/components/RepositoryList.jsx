import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

var repository = {
  name:"unform2" ,
  description:"Forms in React" ,
  link:"http://github.com/unform/unform",
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}