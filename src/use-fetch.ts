import { toRefs, reactive } from 'vue';
export default function (url: string, options: any) {
    const state: { response: any, error: any | null, fetching: boolean } = reactive({
        response: [],
        error: null,
        fetching: true
    })

    const fetchData = async () => {
        try {
            const res = await fetch(url, options);
            console.log("RESSSSSS:", res)
            const json = await res.json()            
            console.log("json:", json)
            state.response = json.library;
        } catch (err) {
            console.log("rip fetch err:", err)
            state.error = err;
        } finally {
            state.fetching = false;
        }
    }

    return {... toRefs(state), fetchData }
}