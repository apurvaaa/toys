def remaining_intervals(small_intervals, big_interval):
	small_intervals.sort(lambda (start, end):start)
	# mutating the input. Can create a new array if mutation is a problem. 

	big_start, big_end = big_interval

	prev = None  # start of the gap
	for i, (start, end) in enumerate(small_intervals):
		if start >= big_start:
			prev = end if i == 0 else big_start
			break
		if end >= big_start:
			prev = end
			break 
	if prev == None: return []
	
	gaps = []
	for j in range(i+1, len(small_intervals)):
		(start, end) = small_intervals[j]
		if start >= big_end:
			if prev < big_end: gaps.append((prev, big_end))
			return gaps
		if end > big_end:
			return gaps
		gaps.append((start, end))
		prev = end
	if prev < big_end: gaps.append((prev, big_end))
	return gaps
	 
	
