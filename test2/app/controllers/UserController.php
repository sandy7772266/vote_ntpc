<?php

class UserController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(User::all());
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */


	public function store()
	{
		//
		$data = Input::get();
		$user = new User;
		$user->username=$data['username'];
		$user->c_name=$data['c_name'];
		$user->save();

		$arr=[
			'user' => $user,
			'flash' => ['type'=>'success','msg' => '新增成功！']
		];

		return Response::json($arr);		
	}
    //修改部分 end

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */

		//修改部分
	public function update($id)
	{
		$data = Input::get();
		$user = User::find($id);

		if(isset($data['c_name'])){
			$user->c_name = $data['c_name'];
		}

		// if(isset($data['done'])){
		// 	$todo->done = $data['done'];
		// }

		$user->save();

		$arr = [
			'flash' => ['type' => 'success',
						'msg' => '更新成功！']
		];

		return Response::json($arr);
	}
    //修改部分 end

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
