package algods.tree.binarytree;

import java.util.PriorityQueue;

public class BinaryTree {
	public static void main(String args[]) {
		System.out.println("hi");
		
		PriorityQueue<Integer> priorityQueue = new PriorityQueue<Integer>((a,b)->b-a);
		
		priorityQueue.add(10);
		priorityQueue.add(11);
		priorityQueue.add(12);
		System.out.println(priorityQueue.toString());

		priorityQueue.add(5);
		System.out.println(priorityQueue.toString());

		priorityQueue.add(9);
		
		
		System.out.println(priorityQueue.toString());

	}
}