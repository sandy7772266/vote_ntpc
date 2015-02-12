<?php

class TodoController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Todo::all());
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
		$todo = new Todo;
		$todo->content=$data['content'];
		$todo->save();

		$arr=[
			'todo' => $todo,
			'flash' => ['type'=>'success','msg' => '新增成功！']
		];

		return Response::json($arr);
	}


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
	public function update($id)
	{
		$data = Input::get();
		$todo = Todo::find($id);

		if(isset($data['content'])){
			$todo->content = $data['content'];
		}else{
			$todo->done = !$todo->done;
		}

		// if(isset($data['done'])){
		// 	$todo->done = $data['done'];
		// }

		$todo->save();

		$arr = [
			'flash' => ['type' => 'success',
						'msg' => '更新成功！']
		];

		return Response::json($arr);
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{

		$todo = Todo::find($id);
		$todo->delete();

		$arr = [
			'flash' => ['type' => 'success',
						'msg' => '待辦事項已刪除！']
		];

		return Response::json($arr);
	}


	public function clean(){

		Todo::where('done', '=', 1)->delete();

		$arr = [
			'type' => 'success',
			'msg' => '完成事項已刪除！'
		];

		return Response::json($arr);
	}

}
