import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getRandomPrompt} from '../utils'
import { FormField,Loader } from '../components'

const handleSubmit = () => {
  console.log('submit')
}

const handleChange = (e) => {  
  console.log('change')       
}

const handleSurpriseMe = () => {

}

const CreatePost = () => {
  const navigate = useNavigate()
  const [form,useForm] = useState({
    prompt: '',
    name: '',
    photo: ''
  });
  const [loading,useLoading] = useState(false);
  const [generateImg,useGenerateImg] = useState(false);
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images through  DALL-E AI and share them with the community.
        </p>
      </div>
      <form className='mt-16 max-w-3x1' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            lableName = 'Your name'
            type = 'text'
            placeholder = 'Rasheed'
            name = 'name'
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormField
            lableName = 'Prompt'
            type = 'text'
            placeholder = 'a plush toy roboot sitting in a field at sunset'
            name = 'prompt'
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe = {handleSurpriseMe}
           />
        </div>
      </form>
    </section>
  )
}

export default CreatePost