import { RuleSet } from '../../entities'

const getDetails = (): string => {
  return ''
}

const getProjectName = (): string => {
  return ''
}

const program = 'Self Track (Me :D!)'
// const classNames = ['self-track']

export const selfTrackRules: RuleSet[] = [
  {
    // classNames,
    executableNames: ['self-track'],
    os: 'linux',
    getDetails,
    getProjectName,
    program
  },
  {
    // classNames,
    executableNames: ['self-track.exe'],
    os: 'win32',
    getDetails,
    getProjectName,
    program
  }
]
