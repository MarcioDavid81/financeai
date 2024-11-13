"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              <ArrowDownUpIcon size={16} />
              Adicionar Transação
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransaction && (
              <div className="text-sm text-red-500">
                Você atingiu o limite de transações.
              </div>
            )}
          </TooltipContent>
        </Tooltip>
        <UpsertTransactionDialog
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
      </TooltipProvider>
    </>
  );
};

export default AddTransactionButton;
