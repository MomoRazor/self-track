import { desktopIdle } from 'node-desktop-idle-v2'

let interaction = false
const maxIdleTime = 20

const checkState = (): boolean => {
  const currentIdleTime = desktopIdle.getIdleTime()
  if (currentIdleTime > maxIdleTime) {
    interaction = false
  } else {
    interaction = true
  }

  return interaction
}

const start = async (): Promise<void> => {
  desktopIdle.startMonitoring()
}

const end = (): void => {
  desktopIdle.stopMonitoring()
}

export const InteractionTracker = {
  start,
  checkState,
  end
}
