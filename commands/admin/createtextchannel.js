const { Command } = require('discord-akairo');

class CreateTChannel extends Command {
    constructor() {
        super('createtextChannel', {
            aliases: ['createtextchannel', 'createtext-channel', 'cth'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Creates text channel as per the arguments entered by the command executor.',
                usage: '<channel name>',
                examples: ['general-chat']
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
            await message.guild.channels.create(`${name}`, { type: 'text' });
            return message.channel.send(`:thumbsup: Text Channel **${name}** Successfully Created! `);

        } catch (err) {
            message.channel.send(`:no_entry_sign: **${err}**`);
        }

    }

}

module.exports = CreateTChannel;
