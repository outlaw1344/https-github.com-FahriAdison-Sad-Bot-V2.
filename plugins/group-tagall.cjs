var handler = async (m, {
	conn,
	args,
	participants
}) => {
	var text = args.join` ` || "halo"
	var users = participants.map(u => u.id)
	conn.reply(m.chat, '*ć TAG ALL ć*\n' + 'Message:' + `*${text}*` + '\n\nā ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\nā `, null, {
		mentions: users
	})
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^tagall$/i
handler.group = true
handler.admin = true
module.exports = handler