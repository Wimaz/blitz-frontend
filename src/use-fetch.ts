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
            const json = await res.json()            
            state.response = json.library;
        } catch (err) {
            state.error = err;
        } finally {
            state.fetching = false;
        }
    }

    return {... toRefs(state), fetchData }
}