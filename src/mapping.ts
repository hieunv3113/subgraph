import {
  Crafting as CraftingEvent,
  Fee as FeeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent
} from "../generated/KawaiiCrafting/KawaiiCrafting"
import {
  Crafting,
  Fee,
  OwnershipTransferred,
  Pause,
  Unpause
} from "../generated/schema"

export function handleCrafting(event: CraftingEvent): void {
  let entity = new Crafting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.nftId = event.params.nftId
  entity.save()
}

export function handleFee(event: FeeEvent): void {
  let entity = new Fee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.min = event.params.min
  entity.max = event.params.max
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}
