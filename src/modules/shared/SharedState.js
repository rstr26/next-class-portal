const { create } = require("zustand");

const useStore = create((set) => ({
    userid: 'rtabernilla',
    setUserId: (update) => set(() => ({ userid: update }))
}))

export default useStore