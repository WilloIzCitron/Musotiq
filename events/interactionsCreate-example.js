// This is an example event to handle the interactions

module.exports = (client, interaction) => {

  // This method is provided by discord.js
  // see https://discord.js.org/#/docs/main/stable/class/Interaction?scrollTo=isCommand
  // Since interactions are not always commands we should check for this.
  // if the interaction is not a command then exit quietly.
  if (!interaction.isCommand()) {
    return
  }

  // When using a command, we can directly get it's data.
  const cmd = client.slashCommands.get(interaction.commandName.toLowerCase())

  try {
    cmd.execute(interaction, client)
  } catch {
    throw new Error('Failed to run command.')
  }


}