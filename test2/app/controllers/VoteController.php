<?php

class VoteController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Vote::all());
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
		$vote = new Vote;
		$vote->school_name=$data['school_name'];
		$vote->vote_title=$data['vote_title'];
		$vote->vote_amount=$data['vote_amount'];
		$vote->start_at=$data['start_at'];
		$vote->end_at=$data['end_at'];
		$vote->vote_goal=$data['vote_goal'];
		$vote->can_select=$data['can_select'];
		$vote->save();

		$arr=[
			'vote' => $vote,
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
		$vote = Vote::find($id);



		if(isset($data['vote_title'])){
			$vote->vote_title = $data['vote_title'];

			//return Response::json($vote);
		}

		// if(isset($data['done'])){
		// 	$todo->done = $data['done'];
		// }

		$vote->save();

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
