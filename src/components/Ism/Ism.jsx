import { Text3D } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

function Ism() {
	return (
		<>
			{
				"Dostonbek".split("").map((item, index) => (
					<RigidBody position={[-10 + index*5, 20, 20]}>
						<group
							

						>
							<Text3D
								size={4}
								font={'./Shoju.json'}
								bevelEnabled
								bevelThickness={0.8}
							>
								{item}
								<meshStandardMaterial color={'orange'} />
							</Text3D>
						</group>
					</RigidBody>
				))
			}
		</>
	)
}

export default Ism