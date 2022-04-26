import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjZjMWM1MmM2NTYwMjUxZWU5MjliNmRmMDc1ZmQwNyIsInN1YiI6IjYyNTFjZjEwOGZkZGE5MTExZWNkZmZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kv7tq3ayaTTPFx1ofKh6bYlEmwq_SI9e-35-ewN4bCU',
        'content-type': 'application/json;charset=utf-8',
    }
})


export default apiFilmes