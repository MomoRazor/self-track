import { ActivityPeriod, RuleSet } from '../../entities'

const getDetails = (info: ActivityPeriod): string => {
  return info.details.title
}

const getProjectName = (): string => {
  return ''
}

const program = 'Unknown Software'
// const classNames = ['']

export const defaultRules: RuleSet[] = [
  {
    // classNames,
    executableNames: [],
    os: 'linux',
    getDetails,
    getProjectName,
    program
  },
  {
    // classNames,
    executableNames: [],
    os: 'win32',
    getDetails,
    getProjectName,
    program
  }
]
