import { create } from 'zustand'

export interface VirMonitor {
    name: String
}

interface VirMonitorState {
    monitors: VirMonitor[],
    addMonitor: (monitor: VirMonitor) => void
}

export const useMonitorStore = create<VirMonitorState>()((set) => ({
    monitors: [],
    addMonitor: (monitor) => set((state) => ({
        monitors: [...state.monitors, monitor]
    }))
}))
