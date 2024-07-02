import React, { useRef } from 'react'
import './home.css'
import { Canvas } from '@react-three/fiber'
import Village from '../Village/Village'
import { OrbitControls,Loader } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Ism from '../Ism/Ism'
import Monsters from '../Monster/Monsters'

function Home() {
	const ref = useRef()

	function Foo(params) {
		console.log("dasdasdsad")
		ref.current.applyImpulse({ x: 40, y: 40, z: 10 })
	}
	return (
		<div className='container'>
			<Canvas
				camera={{
					position: [5, 15, 40]

				}}
			>
				<OrbitControls autoRotate={true} autoRotateSpeed={0.5} />
				<ambientLight intensity={3} />
				<directionalLight intensity={3} />

				<Physics >
					<Monsters />
					<Ism />
					<RigidBody colliders="hull" type='fixed'>
						<Village />
					</RigidBody>
					{
						[1, 2, 3, 4, 5, 5, 6, 7, 8].map((item, index) => (
							<RigidBody key={index}>
								<mesh position={[index * 3, 40, 0]} scale={3}>
									<boxGeometry />
									<meshStandardMaterial color={'orange'} />
								</mesh>
							</RigidBody>
						))
					}
					{
						[1, 2, 3, 4, 5, 5, 6, 7, 8].map((item, index) => (
							<RigidBody key={index}>
								<mesh position={[index * 3, 30, 0]} scale={3}>
									<boxGeometry />
									<meshStandardMaterial color={'gold'} />
								</mesh>
							</RigidBody>
						))
					}


					<RigidBody type='fixed'>
						<mesh scale={[100, 2, 100]} position={[0, -1, 0]}>
							<boxGeometry />
							<meshBasicMaterial color={'orangered'} />
						</mesh>
					</RigidBody>
				</Physics>
			</Canvas>
			<Loader />
		</div>
	)
}

export default Home