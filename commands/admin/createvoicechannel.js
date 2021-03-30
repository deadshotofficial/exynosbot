const { Command } = require('discord-akairo');

class CreateVChannel extends Command {
    constructor() {
        super('createvoiceChannel', {
            aliases: ['createvoicechannel', 'createvoice-channel', 'cvh'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Creates voice channel as per the arguments entered by the command executor.',
                usage: '<channel name>',
                examples: ['General VC']
            },
            typing: false

        });
    }

    async exec(message) {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":no_entry_sign: Invalid Permissions");
        
        const prefix = 'e?'
        const args = message.content.slice(prefix.length).split(/ +/);
        
        let name = args.slice(1).join(" ");
        if (!name) return message.reply(':no_entry_sign: Mention The Channel Name');
        

        try {
            await message.guild.channels.create(`${name}`, { type: 'voice' });
            return message.channel.send(`:thumbsup: Voice Channel **${name}** Successfully Created! `);

        } catch (err) {
            message.channel.send(`:no_entry_sign: **${err}**`);
        }

    }

}

module.exports = CreateVChannel;
