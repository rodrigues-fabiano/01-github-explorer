interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>

      {
        props.repository.homepage &&
        <a href={`https://` + props.repository.homepage}>Acessar página</a>
      }
    </li>
  );
}
