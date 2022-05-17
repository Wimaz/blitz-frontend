// import { ref, reactive, toRefs } from 'vue';
// import useFetch from './use-fetch';

// const endpoint = 'http://localhost:3300/graphql';

// export default function () {
//     const val = ref("");
//     const todos: { list: any } = reactive({ list: [] });
//     const submitted = async () => {


//         const headers = {
//             "content-type": "application/json"
//         }
//         const graphqlQuery = {
//             // "operationName": "todos",
//             "query": `query {todos { _id task completed }}`
//             // "variables": {}
//         }
//         const options = {
//             "method": "POST",
//             "headers": headers,
//             "body": JSON.stringify(graphqlQuery)
//         };

//         const { response, error, fetching, fetchData } = useFetch(endpoint, options);
//         fetchData()
//         todos.list = response;
//         console.log('YO RESPONSE THO:!!', response);
//     }
//     return { val, ...toRefs(todos), submitted }
// }




// interface Todo {
//     _id: string;
//     task: string;
//     completed: boolean;
// }