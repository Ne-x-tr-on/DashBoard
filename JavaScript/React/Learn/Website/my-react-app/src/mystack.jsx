function Stack() {
  const stackItems = [
    { name: "Mongo", Use: "Database" },
    { name: "MySQL", Use: "Database" },
    { name: "PostgreSQL", Use: "Database" },
    { name: "Redis", Use: "Database" },
    { name: "Apache Kafka", Use: "Message Queue" },
    { name: "Rust", Use: "Backend" },
    { name: "Python", Use: "BackendMl" },
    { name: "Nextjs", Use: "FrontEnd" }
  ];

 return (
  <div className="stack">
    <h2>My Tech Stack</h2>
    <ul>{stackItems.map((item,index) =>(
      <li key={index}>
        <strong>{item.name}</strong> - {item.Use}
      </li>
    ))}
    </ul>
  </div>
 );
}

export default Stack;
