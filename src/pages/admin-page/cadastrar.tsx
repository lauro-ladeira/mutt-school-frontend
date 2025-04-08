import { useForm } from 'react-hook-form'
import { AdminPageWrapper } from './AdminPageWrapper'

type FormValues = {
  especie: string
  nome: string
  idade: string
  porte: string
  vacinado: 'sim' | 'nao'
  vermifugado: 'sim' | 'nao'
  descricao: string
  fotos: FileList
}

export const CadastrarAnimal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data)
  }

  return (
    <AdminPageWrapper title="Cadastrar animal">
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        <label>
          Espécie
          <input placeholder="Insira a espécie do animal. Ex.: gato" {...register('especie', { required: true })} />
        </label>

        <label>
          Nome
          <input placeholder="Insira o nome do animal" {...register('nome', { required: true })} />
        </label>

        <label>
          Idade
          <input placeholder="Insira a idade do animal" {...register('idade', { required: true })} />
        </label>

        <label>
          Porte
          <input placeholder="Insira o porte do animal. Ex.: médio" {...register('porte', { required: true })} />
        </label>

        <div>
          <p>É vacinado?</p>
          <label>
            <input type="radio" value="sim" {...register('vacinado', { required: true })} /> Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register('vacinado')} /> Não
          </label>
        </div>

        <div>
          <p>É vermifugado?</p>
          <label>
            <input type="radio" value="sim" {...register('vermifugado', { required: true })} /> Sim
          </label>
          <label>
            <input type="radio" value="nao" {...register('vermifugado')} /> Não
          </label>
        </div>

        <label>
          Descrição
          <textarea
            placeholder="Insira uma pequena descrição da personalidade do animal."
            {...register('descricao')}
          />
        </label>

        <label>
          Insira fotos e vídeos
          <input type="file" accept="image/*,video/*" multiple {...register('fotos')} />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </AdminPageWrapper>
  )
}
