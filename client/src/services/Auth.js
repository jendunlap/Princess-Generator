import Client from './Taco'

export const SignIn = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    let userId = res.data.user.id
    localStorage.setItem('id', userId)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const Register = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProfile = async (userId, formState) => {
  try {
    await Client.put(`/users/${userId}`, formState)
  } catch (error) {
    throw error
  }
}

export const deleteProfile = async (userId) => {
  try {
    await Client.delete(`/users/${userId}`)
  } catch (error) {
    throw error
  }
}
