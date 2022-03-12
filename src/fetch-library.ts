import { ref, reactive, toRefs } from 'vue'
import useFetch  from './use-fetch'
export default function () {
    const val = ref("");
    const library: {list: any } = reactive({list: []});    
    const submitted = async () => {
        const { response, error, fetching, fetchData } = useFetch("http://localhost:3300/test-data", null);
        fetchData();
        console.log('Library after response:', response)
        console.log('Library after error:', error)
        console.log('Library after fetching:', fetching)
        library.list = response;
    }
   return { val, ...toRefs(library), submitted }
}