import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const { 
    register,
     handleSubmit
    } = useForm<NewTransactionModal>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton><X size={24}/> </CloseButton>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24}/>
                Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24}/>
                Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>

        
      </Content>
    </Dialog.Portal>
  );
}
