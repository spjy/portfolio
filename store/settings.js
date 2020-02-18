import yaml from 'js-yaml'
import user from '../static/settings.yml'

const { linkedIn, email, github, skills } = yaml.safeLoad(user)

export const state = () => ({
  linkedIn,
  email,
  github,
  skills
})
