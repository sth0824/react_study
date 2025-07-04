import { useState } from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={(e) => {
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = props.topics.map(t => (
    <li key={t.id}>
      <a href={`/read/${t.id}`} id={t.id} onClick={(e) => {
        e.preventDefault();
        props.onChangeMode(Number(e.target.id));
      }}>{t.title}</a>
    </li>
  ));
  return <nav><ol>{lis}</ol></nav>;
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder="title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body}
            onChange={(e) => setBody(e.target.value)} />
        </p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  let content = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === 'READ') {
    const topic = topics.find(t => t.id === id);
    content = <Article title={topic.title} body={topic.body} />;
    contextControl = (
      <li><a href="/update" onClick={(e) => {
        e.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
    );
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = { id: nextId, title, body };
      setTopics([...topics, newTopic]);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }} />;
  } else if (mode === 'UPDATE') {
    const topic = topics.find(t => t.id === id);
    content = <Update title={topic.title} body={topic.body}
      onUpdate={(title, body) => {
        console.log(title, body);
        const updatedTopic = { id: id, title: title, body: body };
        const newTopics = [...topics];
        for (let i = 0; i < newTopics.length; i++) {
          if (newTopics[i].id === id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ');
      }} />;
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => setMode('WELCOME')} />
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ');
        setId(id);
      }} />
      {content}
      <ul>
        <li><a href="/create" onClick={(e) => {
          e.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
