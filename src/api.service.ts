import type { Observable as ObservableType } from 'rxjs';
import { Observable } from 'rxjs';
const base_options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

// export async function create(task: string) {
//     const query = `
//         mutation { 


//     return await queryRunner(query);
// }

// export async function load() {
//     const query = `query {todos { _id task completed updated_at created_at }}`;
//     return await queryRunner(query);
// }

const getLibraryQuery = `
query {
	books {
    title
    author
    blurb
    pages(populate: true){ content page_num  }
  }
}`;

const libraryRes = await queryRunner(getLibraryQuery);

export function runner(query: string): ObservableType<any> {
    const q = { query };
    const options = {
        ...base_options,
        body: JSON.stringify(q)
    };
    return new Observable(sub => {
        fetch(options).then((res) => {
            console.log("Wow a reponse but that would be almost magic:", res); 
            sub.next(res);
            sub.complete();
        })
    })
}

export async function queryRunner(query: string): Promise <any> {
    const q = { query: query };
    const options = {
        ...base_options,
        body: JSON.stringify(q),
    };
    const res = await fetch(endpoint, options);
    return await res.json();
}


  // async update(id) {
  //   const todo = this.getTodo(id);
  //   //Yeah bigbrain this one
  //   const query = `mutation {
  //         updateTodo(payload: { 
  //             _id: "${id}",
  //             task: "${todo.task}" 
  //           }){
  //             _id task completed
  //           }
  //       }`;
  //   const res = await this.queryRunner(query);

  //   todo.edit = false;
  // },
  // async deleteTodo(id) {
  //   const query = `mutation { 
  //       deleteTodo(payload: { _id: "${id}"}) {
  //         _id 
  //       }
  //     }`;
  //   const res = await this.queryRunner(query);

  //   this.todos = this.todos.filter(({ _id }) => _id !== id);
  // },
  // toggleEdit(id) {
  //   const todo = this.getTodo(id);
  //   todo.edit = !todo.edit;
  // },
  // async toggleCompleted(id) {
  //   const todo = this.getTodo(id);
  //   todo.completed = !todo.completed;

  //   //Toggle server
  //   const query =  `mutation {
  //         updateTodo(payload: { 
  //             _id: "${id}",
  //             completed: ${todo.completed}
  //           }){
  //             _id task completed
  //           }
  //       }`;

  //   const res = await this.queryRunner(query);
  // },
  // getDateDiff(todo){
  //   return todo.updated_at ? todo.updated_at : 'Fuck'
  // }
  
