import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'ааа', body: 'бб'},
        {id: 2, title: 'ггг 2', body: 'аа'},
        {id: 3, title: 'ввв 3', body: 'яя'}
    ])

    function getSortedPosts() {
        console.log('ОТРАБОТАЛА ФУНКЦИЯ SORTED POSTS ')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }
    
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = getSortedPosts();

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    //Получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>

            {posts.length !== 0
                ? <PostList remove={removePost} posts={sortedPosts} title={'Посты про JS'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
            }
        </div>
    );
}

export default App;