import Gun from 'gun'
import 'gun/sea'

const gun = Gun(["http://localhost:8765/gun"])

export default gun