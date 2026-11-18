export type InlinePart = string | { href: string; label: string };

export type PostBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; parts: InlinePart[] }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; label: string; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  datePublished: string;
  dateLabel: string;
  keywords: string[];
  body: PostBlock[];
  authorNote: string;
};

const p = (...parts: InlinePart[]): PostBlock => ({ type: 'p', parts });
const h2 = (text: string): PostBlock => ({ type: 'h2', text });

export const posts: Post[] = [
  {
    slug: 'siemens-hls-hackathon-cnn-energy-915x',
    title: 'How I cut CNN inference energy 915x to win the Siemens EDA HLS Hackathon 2026',
    seoTitle: 'How I Cut CNN Inference Energy 915x | Siemens HLS Hackathon',
    description:
      'How I won the Siemens EDA HLS Hackathon 2026: a CNN accelerator cut from 6,877 nJ to 7.51 nJ per inference at 95.3% accuracy, using hls4ml and Catapult.',
    summary:
      "I won first place in the Siemens EDA Roadside Recognition Using HLS Hackathon 2026 with a small image-recognition chip design that uses 7.51 nJ per inference. The starting reference design used 6,877 nJ, so mine uses 915 times less energy. It scored 95.3% accuracy, just above the contest's 95% minimum.",
    datePublished: '2026-11-18',
    dateLabel: '18 November 2026',
    keywords: [
      'Siemens EDA HLS Hackathon 2026',
      'Roadside Recognition Using HLS',
      'CNN energy per inference',
      'hls4ml',
      'Siemens Catapult',
      'reuse factor',
      'high-level synthesis',
    ],
    body: [
      h2('What was the Siemens EDA HLS Hackathon 2026?'),
      p(
        'High-level synthesis (HLS) turns C++ code into a hardware design. Siemens EDA ran this contest through its HLS Academy from 13 July to 15 October 2026. The rules call it the Accelerating Inferencing Using HLS Hackathon, and the 2026 edition was titled Roadside Recognition Using HLS.',
      ),
      p(
        'Each entrant built a hardware accelerator for a convolutional neural network (CNN). A CNN is a type of model used for image recognition. This one had to sort 20 by 20 pixel grayscale images into ten classes, including car, cyclist, pedestrian and traffic light. The lowest energy per inference won. One inference means classifying one image.',
      ),
      p('A design only counted if it met three limits:'),
      {
        type: 'ul',
        items: ['accuracy above 95%', 'under 20 ms per inference', 'area within 10,000,000 µm²'],
      },
      p(
        'My entry, ROUNDING ERROR, finished first of 24 ranked entries at 7.513 nJ. Second place was 8.333 nJ. The ',
        { href: 'https://hls.academy/roadside-recognition-using-hls-hackathon/', label: 'final leaderboard' },
        ' is on the HLS Academy site.',
      ),

      h2('How does the hackathon design flow work?'),
      p('Every full run went through the same five steps:'),
      {
        type: 'ol',
        items: [
          'A Python script trains the CNN in Keras on 2,267 labeled images.',
          'The open-source tool hls4ml converts the trained model into C++ with fixed-point numbers.',
          'Siemens Catapult synthesizes that C++ into a hardware design.',
          'A simulation runs the hardware on ten images and records the time.',
          'Siemens PowerPro calculates the power. Energy is power multiplied by time.',
        ],
      },
      p(
        'Accuracy comes from 190 separate test images. All of these results come from simulation and power analysis.',
      ),
      p(
        'I also tried QKeras, a library that trains a model with its final number widths in mind. QKeras layers took 2.2 times as many clock cycles in my tests, so the winning design uses plain Keras.',
      ),

      h2('Where did the 915x energy reduction come from?'),
      p(
        'Power fell about 20 times and run time fell about 45 times. Multiplied together, those give the 915x result.',
      ),
      {
        type: 'table',
        label: 'Reference design compared with the final design',
        head: ['Measure', 'Reference design', 'Final design', 'Change'],
        rows: [
          ['Energy per inference', '6,877.2 nJ', '7.5134 nJ', '915x lower'],
          ['Power', '66,670 µW', '3,310.59 µW', '20x lower'],
          ['Time per inference', '103.15 µs', '2.27 µs', '45x shorter'],
          ['Area', '1,203,218 µm²', '60,946 µm²', '20x smaller'],
          ['Accuracy', '97.9%', '95.3%', '2.6 points lower'],
        ],
      },
      p(
        'The next table shows the main steps between those two designs. A filter is one feature detector in a convolution layer. The datapath width is the number of bits used for values moving through the network. The reuse factor sets how many multiplications share one hardware multiplier.',
      ),
      {
        type: 'table',
        label: 'Main design steps from the reference design to the final design',
        head: ['Step', 'Change', 'Energy (nJ)', 'Accuracy'],
        rows: [
          ['1', 'Reference design with 32-bit numbers', '6,877.2', '97.9%'],
          ['2', 'Smaller kernels and fewer filters', '2,705.8', '98.4%'],
          ['3', '18-bit datapath and 16-bit weights', '1,423.9', '98.4%'],
          ['4', 'Reuse factor 1 on both convolution layers', '80.9', '98.4%'],
          ['5', 'Reuse factor 9 on the second convolution', '61.8', '98.4%'],
          ['6', 'Fewer filters, 13-bit datapath and 12-bit weights', '31.3', '96.8%'],
          ['7', '8-bit datapath and 7-bit weights', '17.4', '96.8%'],
          ['8', 'Hidden dense layer removed, 6-bit datapath', '12.0', '95.3%'],
          ['9', 'One convolution layer only', '9.2', '95.3%'],
          ['10', 'Two convolutions again, with a thin first layer', '8.34', '95.3%'],
          ['11', 'One filter in the first layer, 7-bit weights', '7.51', '95.3%'],
        ],
      },

      h2('Why did a reuse factor of 1 cut energy so much?'),
      p(
        'The biggest single drop came from changing both convolution layers from a reuse factor of 100 to 1. Energy fell 17.6 times, from 1,423.9 nJ to 80.9 nJ.',
      ),
      p(
        'Power rose 2.3 times, from 15,358 µW to 35,360 µW, because each multiplication now had its own hardware. Run time fell 40.5 times, from 92.7 µs to 2.29 µs. Since energy is power multiplied by time, the faster design used far less energy.',
      ),

      h2('Why did one filter in the first layer work best?'),
      p(
        'The first convolution reads the whole image and produces a 16 by 16 output. It and the stages right after it handle the most data, so each filter there is expensive. My final design has one filter in that layer. A pooling step then shrinks the output to 8 by 8.',
      ),
      p(
        'The second convolution works on that smaller map, so its 12 filters cost much less. This thin-then-wide shape beat every single-convolution design that passed the accuracy limit.',
      ),
      {
        type: 'table',
        label: 'Final design settings',
        head: ['Setting', 'Final value'],
        rows: [
          ['Datapath', '6 bits, 2 fractional'],
          ['Weights', '7 bits, 5 fractional'],
          ['Saturation and rounding', 'On'],
          ['First convolution', 'Kernel 5, 1 filter, pool 2, reuse 1'],
          ['Second convolution', 'Kernel 5, 12 filters, pool 1, reuse 20'],
          ['Dense layers', 'One final layer, reuse 240'],
        ],
      },

      h2('Why was 95% accuracy hard to keep at 6 bits?'),
      p(
        'The flow feeds raw pixel values from 0 to 255 into the hardware. A 6-bit number with 2 fractional bits cannot go above 7.75, so any brighter pixel gets clipped to that maximum. The network ends up seeing something close to a black-and-white version of the image.',
      ),
      p(
        'Clipping made accuracy jump unpredictably between neighboring settings, so I tested full grids of bit widths. Rounding shows how sensitive the design was. Turning it off on the final design dropped accuracy to 21.6%.',
      ),
      p(
        'The final design got 181 of 190 test images right. One fewer would have been 94.7%, below the limit. Each image moves the score by 0.53 points on a test set this small, so 95.3% is a narrow pass.',
      ),

      h2('How many experiments did it take?'),
      p(
        "I logged 365 full runs between 7 September and 10 October 2026, all at the contest's 4 ns clock. A full run took roughly 10 to 35 minutes. An accuracy-only check took 1 to 2 minutes, so I used those in large batches to filter designs first.",
      ),
      p(
        "My run of the unmodified reference design measured 6,877.2 nJ, and one leaderboard entry sat at 6,878 nJ, which told me my setup matched the organizers' scoring.",
      ),

      h2('What would I try next?'),
      p(
        'My target was 6.0 nJ, and I stopped at 7.51 nJ. Reaching 6.0 nJ would need total power of about 2,700 µW. Designs of this shape already spend about 2,080 µW before the second convolution and the dense layer. The largest parts are the FIFO buffers between layers (about 600 µW), the first convolution (about 540 µW) and the softmax output layer (478 µW).',
      ),
      p(
        'The contest settings could not remove those blocks. With access to the full flow, I would start by replacing the softmax output with a simple largest-value selector and using fewer FIFO buffers. I have not tested either change. I would also measure accuracy on a much larger image set, because 190 images make it hard to separate a real gain from noise.',
      ),
    ],
    authorNote:
      'is a semiconductor device and neuromorphic hardware researcher from Bangladesh, an EEE graduate of the University of Dhaka (2026) and a CREST 2027 Research Fellow at Silicon River Bangladesh.',
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
