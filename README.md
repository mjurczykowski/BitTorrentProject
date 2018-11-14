#  Torrent Tracking
This project simulates the behavior of the Bit Torrent Protocol.  There are torrent trackers, peers, files, and sources.


##  File
This program looks at the size of a file and splits it up into an array to later be used by the bit torrent protocol.  For each MegaByte of data (1MB) it is split into 20 chucks / byte packets.

####  function numberOfPackets()
-  The input to this function is a number named fileSize in kilo-bytes.
-  The function should return the number of packets for a file of this size.
-  hint: this is just returning the result of some multiplication and/or division based on the input number.

####  function buildTorrentPacketArray()
-  The input to this function is a number named numOfPackets
-  The output of this function is an array filled with 1's.  The length of the array must be the same as the input.
-  hint: look in your notes, we went over how to do this in an example or two.
Examples
-  buildTorrentPacketArray(4)   ---->  [1,1,1,1]
-  buildTorrentPacketArray(6)   ---->  [1,1,1,1,1,1]
-  buildTorrentPacketArray(200) ---->  [1,1,1,1,1,1,1,1, ...you get it]



##  Tracker
This program looks to update, add or subtract seeds, from the tracker file.  There are many utility functions in the program to update the state of the tracker.

####  Global Variable
Each seed has a corresponding percent of how much of the file it has at its disposal
-  let seeds[]
-  let percent []

####  function numOfSeeds()
loops through the seeds list and counts the number of indexes with a non-null value.

####  function addSeed()
Uses a string input named s, and then adds it to the array with a push().

####  function removeSeed()
looks in the seed list for the seed with the correct name.  Deletes it from the list by re-assigning it the value of null.  You must also save the index number and makes the value in the percent array also null.

####  function reportHealth()
calculates the average number from the percent array and return the number.

####  function update()
loops through all of the seeds and picks a randomly number between zero and one.  If this number is larger than the current percent, replace it.  If the number is less than 0.03, remove the seed by assigning nulls to the two arrays.



##  User (also called a Client)
This program mimics the behavior of a user attempting to download a file utilizing the bit torrent protocol.

####  Global Variables
-  MyTracker
-  MyTorrentFile

####  function User
Has two inputs and pipes them into the first two variables below.  The state is preset to "seed" and the seed() function is run to config the speeds.

####  Local Variables
-  torrentFile: Is an empty array filled with zeros
-  torrentTrackerFile: represents the tracker from the other file.
-  state:  Is a string holding the value, "seed" or "leech"
-  downloadSpeed:  a number between 0 and 25
-  uploadSpeed:  a number between 0 and 10


####  Child functions (secure/private)

-  startDownload() : Mr. Fleming will program this.

-  updateTracker() : One line of code, asks the torrentTrackerFile to use its update() function.

-  checkProgress() : returns the average value from the torrentFile array.  Should be between zero and one.

-  leech() :  affects the up and download speeds negatively.
    -  changes the uploadSpeed to be 0.
    -  changes the downloadSpeed to a be a random number between 0 and 1.

-  seed() : affects the up and download speeds positively.
    -  changes the uploadSpeed to be a random number between 0 and 10.
    -  changes the downloadSpeed to a be a random number between 0 and 25.
