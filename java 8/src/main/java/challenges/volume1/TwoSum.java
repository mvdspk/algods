package challenges.volume1;

import java.util.HashMap;
import java.util.Map;

/**
 * Given an input array, find two locations whose value equqls K
 * 
 * @author 123mvds@gmail.com
 *
 */
public class TwoSum {
	
	/**
	 * Time complexity: O(n^2)
	 * @param input
	 * @param k
	 * @return
	 */
	public int[] usingNestedLoops(int[] input, int k) {
		int[] indices = { -1, -1 }; // initialize with -1,-1 as no such elements found

		for (int i = 0; i < input.length; i++) {
			for (int j = i + 1; j < input.length; j++) {
				if (input[i] + input[j] == k) {
					indices[0] = i;
					indices[1] = j;
					System.out.println(indices[0]+" ," +indices[1]);
					return indices;
				}
			}
		}
		return indices;
	}
	
	/**
	 * <pre>
	 * Time Complexity: O(n)
	 * Space Complexity: O(n)
	 * ----
	 * using one pass and hash map
	 * </pre>
	 */
	public int[] usingOnePassAndHashMap(int [] input, int k) {
		int[] indices = { -1, -1 }; // initialize with -1,-1 as no such elements found

		// convert the array to hash Map O(n)
		// for each element in hash map, find the difference  and look up the difference O(1)
		Map<Integer, Integer> lookUp = new HashMap<Integer, Integer>();
		
		for(int i=0; i<input.length;i++)
		{
			lookUp.put(input[i], i);
		}
		
		for(int i=0;i<input.length;i++) {
			int delta = k-input[i];
			
			if(lookUp.containsKey(delta)) {
				indices[0]=i;
				indices[1]=lookUp.get(delta);
				
				return indices;
			}
		}
		return indices;

	}

	static int[][] data = { { 1, 2, 3, 4, 5, 6 } };

	public static void main(String[] args) {
		TwoSum twoSum = new TwoSum();
		
		int [] dataRow= data[0];
		//int indices[] = twoSum.usingNestedLoops(data[0], 11);
		int indices[] = twoSum.usingOnePassAndHashMap(data[0], 11);

		if (indices[0] == -1)
			System.out.println("no such elemets found");

		else
			System.out.println("elemets " + dataRow[indices[0]] + " and " + dataRow[indices[1]] + " found at indices " + indices[0]
					+ " and " + indices[1] + " respectively");

	}
}
